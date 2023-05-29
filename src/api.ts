import { APIGatewayEvent, Context } from 'aws-lambda'
import axios from 'axios'
import envVars from './env'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: envVars.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}

module.exports.indexCourse = async (
    event: APIGatewayEvent,
    context: Context
) => {
    const query = event.queryStringParameters! //TODO: create the validation logic
    const completion = await openai.createChatCompletion({
        model: `${query.modelType}`,
        messages: [
            {
                role: 'user',
                content: `Create an index/summary for an online course based on a given name and a degree of difficulty. The degree of difficulty can be easy, normal and hard. The online course must have ${query.numberSections} sections, only the name of the sections must be output, and the content of your answer must be inside a javascript array, and no more content in apart from this javascript array can be output, the name of the array and the type of variable cannot be output, only output what is inside the 2 brackets, including the brackets theirselves, for exampple, if you were to output 'let index = [a,b,c], I want you to only output [a,b,c] and I dont want you to output 'let index'. The course name is ${query.courseName} and the difficulty is ${query.difficulty}`,
            },
        ],
        temperature: 0,
    })

    console.log(completion.data.choices[0].message?.content)

    return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(completion.data.choices[0].message),
    }
}

module.exports.courseSectionQuiz = async (
    event: APIGatewayEvent,
    context: Context
) => {
    const query = event.queryStringParameters! //TODO: create the validation logic
    const completion = await openai.createChatCompletion({
        model: `${query.modelType}`,
        messages: [
            {
                role: 'assistant',
                content: `${query.courseIndex}`,
            },
            {
                role: 'user',
                content: `Divide the section with name ${query.sectionName} (${query.sectionName} is the section that needs to be split into 2 subsections and this name must be substituted in the property value of "sectionName": ${query.sectionName}) into ${query.subsectionsNumber} subsections and for each subsection create ${query.numberOfQuestionsPerSubsection} questions with ${query.numberOfPosibleSolutionsPerSubsection} multiple solutions where only one is correct, also tell which is the correct solution. Don't place a number at the start of the subsections title. The structure of the output is detailed as follows:
                {"sectionName": "sample",
                    "subsection1": {
                        "subsectionName": "sample",
                        "questions": [
                            {
                                "questionName": "sample",
                                "a": "sample",
                                "b": "sample",
                                "c": "sample",
                                "correct": "sample"
                            },
                            {
                                "questionName": "sample",
                                "a": "sample",
                                "b": "sample",
                                "c": "sample",
                                "correct": "sample"
                            }
                        ]
                    },
                    "subsection2": {
                        "subsectionName": "sample",
                        "questions": [
                            {
                                "questionName": "sample",
                                "a": "sample",
                                "b": "sample",
                                "c": "sample",
                                "correct": "sample"
                            },
                            {
                                "questionName": "sample",
                                "a": "sample",
                                "b": "sample",
                                "c": "sample",
                                "correct": "sample"
                            }
                        ]
                    }
                }`,
            },
        ],
        temperature: 0,
    })
    console.log(query)

    return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(completion.data.choices[0].message),
    }
}
