import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import ApiService from '../../service/ApiService'; // Asegúrate de que la ruta sea correcta

const CrearDirector = () => {
    const [nombre, setNombre] = useState('');
    const [imagenUrl, setImagenUrl] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const manejarEnvio = async (e) => {
        e.preventDefault();

        const nuevoDirector = {
            nombre,
            imagen_url: imagenUrl,
        };

        try {
            const response = await ApiService.crearDirector(nuevoDirector);
            setMensaje('Director creado exitosamente!');
            setError('');
            setNombre('');
            setImagenUrl('');
        } catch (error) {
            console.error("Error al crear el director:", error);
            setError('Error al crear el director. Intenta nuevamente.');
            setMensaje('');
        }
    };

    return (
        <Container className="my-5" style={{ maxWidth: '5%', minWidth: '2131px' }}>
            <h1>Crear Director</h1>
            {mensaje && <Alert variant="success">{mensaje}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={manejarEnvio}>
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre del Director</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el nombre del director"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="imagenUrl">
                    <Form.Label>URL de la Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa la URL de la imagen"
                        value={imagenUrl}
                        onChange={(e) => setImagenUrl(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Crear Director
                </Button>
            </Form>
        </Container>
    );
};

export default CrearDirector;
