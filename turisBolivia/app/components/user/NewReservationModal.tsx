import { useState } from 'react';
import { Modal, TextInput, View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';

interface NewReservationModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (newReservation: any) => void;
    isSubmitting: boolean;
}

function NewReservationModal({ visible, onClose, onSubmit, isSubmitting }: NewReservationModalProps) {
    const [formData, setFormData] = useState({
        clientNameID: '',
        serviceNameID: '',
        dateReservation: new Date().toISOString(),
        startTime: '10:00',
        endTime: '11:00',
        status: 'Pendientes'
    });

    const handleSubmit = () => {
        const errors = [];
        if (!formData.clientNameID) errors.push("Nombre del cliente es requerido");
        if (!formData.serviceNameID) errors.push("Servicio es requerido");

        if (errors.length > 0) {
            Alert.alert("Error", errors.join("\n"));
            return;
        }

        onSubmit(formData);
        setFormData({
            clientNameID: '',
            serviceNameID: '',
            dateReservation: new Date().toISOString(),
            startTime: '10:00',
            endTime: '11:00',
            status: 'Pendientes'
        });
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View className="p-6 bg-white flex-1">
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-2xl font-bold">Nueva Reserva</Text>
                    <TouchableOpacity onPress={onClose}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <TextInput
                    className="border p-2 mb-4 rounded"
                    placeholder="Nombre del cliente *"
                    value={formData.clientNameID}
                    onChangeText={text => setFormData({ ...formData, clientNameID: text })}
                />

                <TextInput
                    className="border p-2 mb-4 rounded"
                    placeholder="Servicio *"
                    value={formData.serviceNameID}
                    onChangeText={text => setFormData({ ...formData, serviceNameID: text })}
                />

                <TextInput
                    className="border p-2 mb-4 rounded"
                    placeholder="Estado *"
                    value={formData.status}
                    onChangeText={text => setFormData({ ...formData, status: text })}
                />

                <TouchableOpacity
                    className={`bg-indigo-600 p-3 rounded mt-4 ${isSubmitting ? 'opacity-50' : ''}`}
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text className="text-white text-center">Crear Reserva</Text>
                    )}
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default NewReservationModal;