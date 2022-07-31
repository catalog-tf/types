import { z } from 'zod';

enum ItemQuality {
  Normal = 0,
  Genuine = 1,
  Vintage = 3,
  Unusual = 5,
  Unique = 6,
  Community = 7,
  Valve = 8,
  SelfMade = 9,
  Strange = 11,
  Haunted = 13,
  Collectors = 14,
  Decorated = 15,
}
enum ItemKillstreak {
  None = 0,
  Normal = 1,
  Specialized = 2,
  Professional = 3,
}
const ItemSchema = z.object({
  defindex: z.number().positive(),
  quality: z.nativeEnum(ItemQuality),
  craftable: z.boolean(),
  killstreak: z.nativeEnum(ItemKillstreak),
  australium: z.boolean(),
  festive: z.boolean(),
  // effect: z.nativeEnum(EffectId),
});
export { ItemQuality, ItemKillstreak, ItemSchema };
