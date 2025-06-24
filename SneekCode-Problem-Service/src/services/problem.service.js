const sanitizeMarkdownContent = require("../utils/markDownSanitizer");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData){
    //1.Sanitize the markdown for description
    try {
        problemData.description = sanitizeMarkdownContent(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData); 

        return problem;
    } catch (error) {
        console.log(error);
        throw error;
    }
    }
    async getAllProblems(){
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }
    async getProblem(problemId){
        const problem = await this.problemRepository.getProblem(problemId);
    }
}
module.exports = ProblemService;