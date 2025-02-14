export interface AssetRegistry{
    __registerAssetPath(assetName:string,assetPath:string): this;
    __fetchAssetPath(assetName: string): string | undefined;
    asset_cache: Record<string,string>
}

export const asset_registry: AssetRegistry  = {
    __registerAssetPath(assetName,assetPath){
        this.asset_cache[assetName]=assetPath;
        return this;
    },
    __fetchAssetPath(assetName){
        return this.asset_cache[assetName];
    },
    asset_cache: {}
}