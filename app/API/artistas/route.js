import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + 'artistas'

export async function GET (){
   try{
        const resposta = await axios.get(url);
        console.log(resposta.data)
        return NextResponse.json(resposta.data);
    } catch(error){
        console.log("[ORDER_GET]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", {status: 500});
    }
}
export async function POST (request){
    const params = await request.json();

    try{
        const resposta = await axios.post(url, params);
        return NextResponse.json(resposta.data);
    } catch(error){
        console.log("[ORDER_POST]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", {status: 500});
    }
}