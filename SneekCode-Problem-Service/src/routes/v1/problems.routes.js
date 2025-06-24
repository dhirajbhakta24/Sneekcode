const express = require('express');

const {problemController} = require('../../controllers');

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingProblemController);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.post('/:id', problemController.addProblem);

problemRouter.get('/:id', problemController.deleteProblem);

problemRouter.get('/:id', problemController.updateProblem);

module.exports = problemRouter;

