import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { AssetDocument } from './entities/asset.entity';
import { Model } from 'mongoose';
import { Asset } from './entities/asset.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Asset.name) private assetSchema: Model<AssetDocument>,
  ) {}

  create(createAssetDto: CreateAssetDto) {
    return this.assetSchema.create(createAssetDto);
  }

  findAll() {
    return this.assetSchema.find();
  }

  findOne(symbol: string) {
    return this.assetSchema.findOne({ symbol });
  }
}
