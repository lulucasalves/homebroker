import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import crypto from 'crypto';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema({ timestamps: true })
export class Wallet {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
