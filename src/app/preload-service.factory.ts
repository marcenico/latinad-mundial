import { ConfigLoaderService } from './services/config-loader.service';

export function PreloadFactory(configService: ConfigLoaderService) {
  return () => configService.initialize();
}
