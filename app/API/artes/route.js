import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const tipo = searchParams.get("tipo")
    console.log("TIPOOOOOOOOOOOOOOOO");
    console.log(tipo)
    try {
        if (tipo) {
            const resposta = await axios.get(url + '?tipo=' + tipo);
            return NextResponse.json(resposta.data);
        } else {

            const resposta = await axios.get(url);
            return NextResponse.json(resposta.data);
        }
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", { status: 500 });
    }
}
export async function POST(request) {
    const params = await request.json();

    try {
        const resposta = await axios.post(url, params);
        return NextResponse.json(resposta.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", { status: 500 });
    }
}