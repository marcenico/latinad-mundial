import { ConfigLoaderService } from './config-loader.service';

export function PreloadFactory(configService: ConfigLoaderService) {
  return () => configService.initialize();
}
