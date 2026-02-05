import AiAgent, { createTool } from "agent_wrapper";
import { instruction } from "./instraction";
import z from "zod";
import { skillFinder } from "./func";

let agent: AiAgent;

let finder = createTool({
    name: "skillFinder",
    description: "Finds skills based on the query",
    parameters: z.object({
        query: z.string().describe("The query to search for")
    }),
    execute: async ({ query }) => {
        return skillFinder(query)
    }
})

function GetAgent() {
    if (!agent) {
        agent = new AiAgent({
            name: "skills user",
            key: process.env.KEY as string,
            modelName: "llama-3.3-70b-versatile",
            baseUrl: process.env.API_URL as string,
            instructions: instruction,
            tools: [finder],
        })
    }
    return agent;
}


export { GetAgent }