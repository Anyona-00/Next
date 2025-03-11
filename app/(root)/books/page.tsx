interface Book {
    id: number;
    name: string;
    // Add other book properties here as needed
  }
  
  export default async function Page() {
    const response = await fetch("http://localhost:3000/api/books");
    const books: Book[] = await response.json();
    
    return (
      <div>
        <h1>Books</h1>
        <ul>
          {books.map((book: Book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    );
  }