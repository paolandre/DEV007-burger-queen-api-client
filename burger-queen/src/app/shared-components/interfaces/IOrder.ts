export interface OrderI {
    waiterId: string;
    client: string;
    table: string; 
    status: string;
    dataEntry: string;
    product: {
        qty: string 
        product: {
            id: number;
            name: string;
            price: number;
            quantity: number;
        }
      }
    }

