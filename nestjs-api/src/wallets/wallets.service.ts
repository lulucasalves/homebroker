import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './entities/wallet.entity';
import { CreateWalletAssetDto } from './dto/create-wallet-asset.dto';
import { WalletAsset } from './entities/wallet-asset.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletSchema: Model<Wallet>,
    @InjectModel(WalletAsset.name)
    private walletAssetSchema: Model<WalletAsset>,
  ) {}

  create(createWalletDto: CreateWalletDto) {
    return this.walletSchema.create(createWalletDto);
  }

  findAll() {
    return this.walletSchema.find();
  }

  findOne(id: string) {
    return this.walletSchema.findById(id);
  }

  createWalletAsset(createWalletAssetDto: CreateWalletAssetDto) {
    return this.walletAssetSchema.create({
      wallet: createWalletAssetDto.walletId,
      asset: createWalletAssetDto.assetId,
      shares: createWalletAssetDto.shares,
    });
  }
}
