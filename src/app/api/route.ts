const fs = require('fs');
import { Database } from "duckdb-async"
export const dynamic = 'force-dynamic'
export async function GET(request: Request) {

    return Response.json({hello: 'world'})

    
}


