Package.describe({
  summary: 'Metadata for a Tileset hosted on a server',
});

Package.onUse(function(api){
  api.imply(['tilesets-isomorphic']);
  api.use(['tilesets-isomorphic', 'pixelaether:dds-server', 'ecmascript'], 'server');
  api.export('TilesetDDS', 'server');
  api.addFiles('TilesetDDS.js', 'server');
});
