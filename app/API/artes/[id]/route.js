import axios from "axios";
import { NextResponse } from "next/server";
const url = "http://localhost:5000"


export async function GET(request, { params }) {
    const { id } = params;

    try {
        const resposta = await axios.get(`${url}/${id}`);
        return NextResponse.json(resposta.data);
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", { status: 500 });
    }
}


export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    console.log("CCCCCCCCCCCCCCCCCCCCCCc");
    console.log(id);
    console.log(body);

    try {
        const resposta = await axios.put(`${url}/${id}`, body);
        return NextResponse.json(resposta.data);
    } catch (error) {
        console.log("[ORDER_PUT]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", { status: 500 });
    }
    
}
export async function DELETE(request, { params }) {
    const { id } = params;
    // console.log("APIIIIIIIIII DELEEEEEEEEEEETE");

    try {
        const resposta = await axios.delete(`${url}/${id}`);
        return NextResponse.json(resposta.data);
    } catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("ERRO INTERNO DO SERVIDOR!", { status: 500 });
    }
}