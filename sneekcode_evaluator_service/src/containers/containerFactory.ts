import Docker from "dockerode";


async function createContainer(imageName :string ,cmdExecutable : string[] ){
    const docker = new Docker();

    const container  =  await docker.createContainer({
        Image : imageName,
        Cmd : cmdExecutable,
        AttachStdin: true,  //to enable the input streams
        AttachStdout : true, //to enable output streams
        AttachStderr: true, // to enable error streams
        Tty : false,
        OpenStdin : true, //keepthe input stream open even nointeraction is there

    });
    return container;

}
export default createContainer;