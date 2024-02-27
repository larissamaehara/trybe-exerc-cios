# Para Fixar

1- Observe o código abaixo e faça as alterações necessárias para que ele passe a respeitar o
Princípio da Responsabilidade Única (SRP).

```
// ReadingTracker.ts
type Book = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  private wishlist: Book[];
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.progressNotification(
      'There are still some books to go!',
    );
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  progressNotification(message: string): void {
    console.log(message);
  }
}

const readTracker = new ReadingTracker(20);
readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);
```

2-Observe o código abaixo e faça as alterações necessárias para que ele passe a respeitar o Princípio do Aberto/Fechado (OCP).

```
export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  switch (notificationType) {
    case 'Email':
      console.log('Email: ', message);
      break;
    case 'Phone':
      console.log('Phone: ', message);
      break;
    case 'Console':
      console.log('Console: ', message);
      break;
    default:
      console.log(message);
      break;
  }
}
```
