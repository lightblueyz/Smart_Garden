<<<<<<< HEAD
import { useEffect, useState } from "react";

export function Home() {
    const [htmlContent, setHtmlContent] = useState<string | null>(null);

    useEffect(() => {
        console.log('Fetching HTML...');
        fetch('/Green/index.html')
            .then(response => {
                console.log(response);  // Veja a resposta
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('HTML content:', data);  // Exibe o HTML carregado
                setHtmlContent(data);
            })
            .catch(error => {
                console.error('Error fetching HTML:', error);
            });
    }, []);


    return (
        <div>
            {/* Renderiza o conteúdo HTML */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent || '' }} />
        </div>
    );
}
=======
import { useEffect, useState } from "react";

export function Home() {
    const [htmlContent, setHtmlContent] = useState<string | null>(null);

    useEffect(() => {
        console.log('Fetching HTML...');
        fetch('/Green/index.html')
            .then(response => {
                console.log(response);  // Veja a resposta
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('HTML content:', data);  // Exibe o HTML carregado
                setHtmlContent(data);
            })
            .catch(error => {
                console.error('Error fetching HTML:', error);
            });
    }, []);


    return (
        <div>
            {/* Renderiza o conteúdo HTML */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent || '' }} />
        </div>
    );
}
>>>>>>> fd88f77 (commited)
