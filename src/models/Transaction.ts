import { uuid } from 'uuidv4';

/**
 * Criar um modelo de transação que contenha uma
 * ID, Titulo, Valor e Tipo
 */
class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
