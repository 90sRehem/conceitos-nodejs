const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];
const likes =[]

function validateProjectsId(request, response, next) {
  const { id } = request.params
  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid repository ID" })
  } else {
    return next()
  }
}

// app.use('/projects/:id/like', validateProjectsId)

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository)

  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params
  const { title, url, techs } = request.body

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found" })
  }

  const repository = {
    id,
    title,
    url,
    techs
  }

  repositories[repositoryIndex] = repository
  return response.json(repository)
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repostitory not found" })
  }

  repositories.splice(repositoryIndex, 1)

  return response.status(204).send()
});

app.post("/repositories/:id/like", validateProjectsId, (request, response) => {
  const { id } = request.params

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (!repositoryIndex) {
    return response.status(400).json({ error: "This repository does not exist!" })
  }

  const like ={
    id
  }

  repositories[repositoryIndex].likes += 1

  likes.push(like)

  return response.json(repositories[repositoryIndex])
});

module.exports = app;
