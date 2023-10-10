import { NextResponse} from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { noOfPeople, vichles, waste } = body;
    // vichles have number of vichles, miles per galon ,miles driven per year,
    // waste will have recycling plastic, aluminimu, steel, glass, newspaper, magazines
    return NextResponse.json({ result: noOfPeople * vichles * waste }, { status: 200 });
}