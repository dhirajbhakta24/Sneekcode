const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImpemented.error');

const{ProblemService} = require('../services');
const{ProblemRepository} = require('../repositories');

const problemService = new ProblemService( new ProblemRepository());

function pingProblemController(req,res){
    return res.json({message : 'ProblemController is up'});
}

async function addProblem(req,res,next){
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfully created a new problem',
            error:{},
            data : newproblem
        });
    } catch (error) { 
        next(error);
    }
}

async function getProblem(req,res,next){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully fetched a  problem',
            error:{},
            message:'Successfully fetched a problem',
            data : problem
        });
        
    } catch (error) { 
        next(error);
    }
}

async function getProblems(req,res,next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully fetched a new problem',
            error:{},
            data : response
        })
    } catch (error) { 
        next(error);
    }
}

function deleteProblem(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    }
}

function updateProblem(req,res,next){
    try {
        //nothing implemented
        throw new NotImplemented('addProblem');
    } catch (error) { 
        next(error);
    };
}

module.exports ={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController

}