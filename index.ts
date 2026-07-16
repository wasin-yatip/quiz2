// ==========================================
// 1. Class Book
// ==========================================
class Book {
    private isbn: string;
    private title: string;
    private author: string;
    private price: number;

    constructor(isbn: string, title: string, author: string, price: number) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // Getter สำหรับดึงราคาไปคำนวณ
    public getPrice(): number {
        return this.price;
    }

    // Getter สำหรับแสดงผลในรูปแบบที่กำหนด
    public getBookFormat(): string {
        return `${this.title} (${this.isbn}): ${this.price} บาท`;
    }
}

// ==========================================
// 2. Class Cart
// ==========================================
class Cart {
    private cartId: string;
    private books: Book[]; // Composition: Cart เป็นเจ้าของ Array ของ Book นี้

    constructor(cartId: string) {
        this.cartId = cartId;
        this.books = []; // เริ่มต้นตะกร้าว่างเปล่า
    }

    // Method เพิ่มหนังสือเข้าตะกร้า
    public addBook(book: Book): void {
        this.books.push(book);
    }

    // Method คำนวณราคารวมทั้งหมด
    public getTotalPrice(): number {
        let total = 0;
        for (const book of this.books) {
            total += book.getPrice();
        }
        return total;
        // หรือจะใช้แบบสั้น: return this.books.reduce((sum, book) => sum + book.getPrice(), 0);
    }

    // Method แสดงข้อมูลใบเสร็จรับเงินตาม Expected Output
    public getInfo(): void {
        console.log("=== ใบเสร็จรับเงิน ===");
        console.log(`รหัสตะกร้า: ${this.cartId}`);
        console.log("รายการ:");
        
        for (const book of this.books) {
            console.log(`- ${book.getBookFormat()}`);
        }
        
        console.log(`ราคารวม: ${this.getTotalPrice()} บาท`);
    }
}

// ==========================================
// 3. ส่วนการสร้าง Object และทดสอบการทำงาน
// ==========================================

// สร้าง Object หนังสือตาม Expected Output
const book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 450);
const book2 = new Book("978-1234567890", "TypeScript Deep Dive", "Basarat Ali Syed", 320);

// สร้างตะกร้าสินค้า
const myCart = new Cart("CO01");

// หยิบหนังสือใส่ตะกร้า
myCart.addBook(book1);
myCart.addBook(book2);

// แสดงผลลัพธ์
myCart.getInfo();