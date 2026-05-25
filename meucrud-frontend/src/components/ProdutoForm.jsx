import { useState, useEffect } from 'react';

function ProdutoForm({ produtoEditando, onSalvar, onCancelar }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    useEffect(() => {
        if (produtoEditando) {
            setNome(produtoEditando.nome || '');
            setDescricao(produtoEditando.descricao || '');
            setPreco(produtoEditando.preco || '');
            setQuantidade(produtoEditando.quantidade || '');
        } else {
            limparFormulario();
        }
    }, [produtoEditando]);

    const limparFormulario = () => {
        setNome('');
        setDescricao('');
        setPreco('');
        setQuantidade('');
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const produto = {
            nome,
            descricao,
            preco: parseFloat(preco),
            quantidade: parseInt(quantidade),
        };
        onSalvar(produto);
        limparFormulario();
    };

    return (
        <div style={styles.container}>
            <h2>{produtoEditando ? 'Editar Produto' : 'Novo Produto'}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.campo}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        style={styles.input}
                    />
        </div>
        <div style={styles.campo}>
            <label htmlFor="descricao">Descrição</label>
            <input
                type="text"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                style={styles.input}
            />
        </div>
        <div style={styles.campo}>
            <label htmlFor="preco">Preço:</label>
            <input
                type="number"
                id="preco"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
                style={styles.input}
            />
        </div>
        <div style={styles.campo}>
            <label htmlFor="quantidade">Quantidade:</label>
            <input
                type="number"
                id="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                required
                style={styles.input}
            />
        </div>
        <div style={styles.botoes}>
            <button type="submit" style={styles.btnSalvar}>
                {produtoEditando ? 'Atualizar' : 'Cadastrar'}
            </button>
            {produtoEditando && (
                <button type="button" onClick={onCancelar} style={styles.btnCancelar}>
                    Cancelar
                </button>
            )}
        </div>
    </form>
</div>
    );
}

const styles = {
    container: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '10px',
    },
    campo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    input: {
        padding: '8px 12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
    },
    botoes: {
        display: 'flex',
        gap: '10px',
        marginTop: '8px',
    },
    btnSalvar: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    btnCancelar: {
        padding: '10px 20px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
    },
};

export default ProdutoForm;