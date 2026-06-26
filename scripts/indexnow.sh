#!/usr/bin/env bash
# Avisa a IndexNow (Bing, Yandex, etc.) de URLs nuevas/actualizadas de imfalu.com.
# Uso:
#   ./scripts/indexnow.sh                # envía todas las URLs del sitemap
#   ./scripts/indexnow.sh https://imfalu.com/una-url ...   # envía solo esas
set -euo pipefail

HOST="imfalu.com"
KEY="7e01e190aad76f66f214ecbf5fff209e"           # = nombre del fichero public/<KEY>.txt
KEY_LOCATION="https://${HOST}/${KEY}.txt"

if [ "$#" -gt 0 ]; then
  URLS=("$@")
else
  # Saca las URLs del sitemap en producción
  mapfile -t URLS < <(curl -s "https://${HOST}/sitemap.xml" | grep -oE '<loc>[^<]+' | sed 's/<loc>//')
fi

# Construye el JSON
LIST=$(printf '"%s",' "${URLS[@]}"); LIST="[${LIST%,}]"
BODY=$(printf '{"host":"%s","key":"%s","keyLocation":"%s","urlList":%s}' "$HOST" "$KEY" "$KEY_LOCATION" "$LIST")

echo "Enviando ${#URLS[@]} URLs a IndexNow..."
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$BODY" -w "\nHTTP %{http_code}\n"
