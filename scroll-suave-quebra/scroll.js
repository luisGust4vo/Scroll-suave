(function () {
    // Remove restrições CSS comuns
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.body.style.height = 'auto';

    // Remove possíveis estilos de overflow aplicados ao HTML
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';

    // Desanexa event listeners que possam bloquear o scroll
    const eventsToBlock = ['scroll', 'wheel', 'touchmove', 'keydown'];

    function unblockEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    eventsToBlock.forEach((event) => {
        window.addEventListener(event, unblockEvent, { capture: true, passive: false });
        document.addEventListener(event, unblockEvent, { capture: true, passive: false });
    });

    // Garante que o scroll funcione forçando um conteúdo extra
    const forceScrollDiv = document.createElement('div');
    forceScrollDiv.style.height = '200vh'; // 200% da altura da viewport
    forceScrollDiv.style.backgroundColor = 'transparent'; // Invisível
    document.body.appendChild(forceScrollDiv);

    console.log('Scroll desbloqueado e forçado!');
})();
