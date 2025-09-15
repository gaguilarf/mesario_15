onload = () =>{
    document.body.classList.remove("container");
    // Lógica para mostrar imágenes laterales
    const totalImgs = 70; // img_1.jpg a img_70.jpg (ajusta si hay más)
    const leftContainer = document.getElementById('img-left');
    const rightContainer = document.getElementById('img-right');
    let delay = 3000;
    for (let i = totalImgs; i >= 0; i--) {
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = `img/img_${i}.jpg`;
                img.style.position = 'absolute';
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                // z-index incremental para cada imagen
                img.style.zIndex = 2 + (totalImgs - i);
                img.style.transition = 'all 0.5s';
                if (i % 2 === 1) {
                    // Impar: izquierda
                    img.style.left = `${(totalImgs-i+1)}px`;
                    img.style.bottom = `${(totalImgs-i+1)}px`;
                    leftContainer.appendChild(img);
                } else {
                    // Par: derecha
                    img.style.right = `${(totalImgs-i+1)}px`;
                    img.style.bottom = `${(totalImgs-i+1)}px`;
                    rightContainer.appendChild(img);
                }
            }, delay);
            delay += 1000;
        }
};