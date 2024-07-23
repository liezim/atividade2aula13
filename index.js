const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');
        const button3 = document.getElementById('button3');
        const output = document.getElementById('output');

        button1.addEventListener('click', function() {
            try {
                
                const result = nonExistentFunction(); 

                
                output.innerHTML = 'Resultado: ' + result;
            } catch (error) {
                
                output.innerHTML = `<p class="error">Ocorreu um erro: ${error.message}</p>`;
            }
        });

        button2.addEventListener('click', function() {
            try {
                
                const data = JSON.parse('{ "name": "John", "age": 30 }');

                
                output.innerHTML = 'Nome: ' + data.name + ', Idade: ' + data.age;
            } catch (error) {
                
                output.innerHTML = `<p class="error">Ocorreu um erro: ${error.message}</p>`;
            }
        });

        button3.addEventListener('click', function() {
            try {
                // Simulação de operação bem-sucedida
                const randomNumber = Math.random();

                // Atualiza o conteúdo da saída
                output.innerHTML = 'Número aleatório gerado: ' + randomNumber;
            } catch (error) {
                
                output.innerHTML = `<p class="error">Ocorreu um erro inesperado: ${error.message}</p>`;
            }
        });