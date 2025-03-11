import books from "@/app/api/db";

export async function PUT(
    request: Request,
    context: { params: { id: string } }, 
) {
    const id = context.params.id;
    const book = await request.json();
    
    
    if (String(book.id) !== id) {
        return Response.json({ error: "Book ID in route doesn't match book ID in request body" }, { status: 400 });
    }
  
    const index = books.findIndex(b => String(b.id) === id);
    if (index === -1) {
        return Response.json({ error: "Book not found" }, { status: 404 });
    }
    
    books[index] = book;
    return Response.json(books);
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } }, 
) {
    const id = context.params.id;
    const index = books.findIndex(b => String(b.id) === id);
    
    if (index === -1) {
        return Response.json({ error: "Book not found" }, { status: 404 });
    }
    
    books.splice(index, 1);
    return Response.json(books);
}