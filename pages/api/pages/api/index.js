///*
const handler = (request, response) => {
    //http://localhost:3000/api/pages-api?inputs=Hello
    if (request.method == "GET") {
        const params = request.query;
        //const inputs = params["inputs"];
        //console.log(inputs); //Hello
        
        const responseJson = [
            {
                "label": "pos",
                "score": 0.8038843274116516
            }
        ];
        //response.status(200).json(responseJson);
        //response.status(200).send(responseJson);
        //response.status(200).send(JSON.stringify(responseJson));
        //response.json(responseJson);
        response.send(responseJson);
        //response.send(JSON.stringify(responseJson));
    }
    else if (request.method == "POST") {
        const json = JSON.parse(request.body);
        //console.log(json["inputs"]); //This is a good movie!
        
        const responseJson = [
            {
                "label": "pos",
                "score": 0.8038843274116516
            }
        ];
        //response.status(200).json(responseJson);
        //response.status(200).send(responseJson);
        //response.status(200).send(JSON.stringify(responseJson));
        //response.json(responseJson);
        response.send(responseJson);
        //response.send(JSON.stringify(responseJson));
    }
    else {
        const responseJson = {"message": `${request.method} is not allowed.`};
        response.send(responseJson);
    }
}
export default handler;

export const runtime = 'nodejs' //디폴트 
//export const runtime = 'edge' //에러
//*/
/*
import { NextRequest, NextResponse } from "next/server";

const handler = async (request, context) => {
    if (request.method == "GET") {
        const params = request.nextUrl.searchParams;
        //const inputs = params.get("inputs");
        //console.log(inputs);
        //
        //console.log(request.url); //https://basic-api-nextjs-edge.vercel.app/api/pages-api?inputs=Hello
        //const url = new URL(request.url);
        //const params = url.searchParams;
        //const inputs = params.get("inputs");
        //console.log(inputs);
     
        const responseJson = [
            {
                "label": "pos",
                "score": inputs //0.8038843274116516
            }
        ];
        return NextResponse.json(responseJson);
    }
    else if (request.method == "POST") {
        const json = await request.json();
        //console.log(json);
        //const intent = json["intent"]["name"];

        const responseJson = [
            {
                "label": "pos",
                "score": 0.8038843274116516
            }
        ];
        return Response.json(responseJson);
    }
    else {
        const responseJson = {"message": `${request.method} is not allowed`};
        return NextResponse.json(responseJson);
    }
};
export default handler;

//export const runtime = 'nodejs' //디폴트 //에러
export const runtime = 'edge'
*/
