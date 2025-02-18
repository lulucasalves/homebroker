import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { WalletSchema } from './entities/wallet.entity';
import { Wallet } from './entities/wallet.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletAssetSchema } from './entities/wallet-asset.entity';
import { WalletAsset } from './entities/wallet-asset.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Wallet.name,
        schema: WalletSchema,
      },
      {
        name: WalletAsset.name,
        schema: WalletAssetSchema,
      },
    ]),
  ],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
