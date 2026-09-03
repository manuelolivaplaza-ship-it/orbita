set -e
TMP="C:/Users/manue/OneDrive/Desktop/órbita/propuestas/_tmp_vinedo"
# ETER CLARO 4
curl -L -o "$TMP/eter-vinedo.jpg" "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1920&q=82" &
curl -L -o "$TMP/eter-parra.jpg" "https://images.unsplash.com/photo-1473448912268-2022da777485?auto=format&fit=crop&w=1600&q=82" &
curl -L -o "$TMP/eter-cava.jpg" "https://images.unsplash.com/photo-1510627498534-cf197e32871d?auto=format&fit=crop&w=1600&q=82" &
curl -L -o "$TMP/eter-botella.jpg" "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=82" &
# NOCTUA 4
curl -L -o "$TMP/noctua-hero.jpg" "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=82" &
curl -L -o "$TMP/noctua-cava.jpg" "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1600&q=82" &
curl -L -o "$TMP/noctua-botella.jpg" "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1200&q=82" &
curl -L -o "$TMP/noctua-texture.jpg" "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=1600&q=82" &
wait
ls -lh "$TMP"/*.jpg
