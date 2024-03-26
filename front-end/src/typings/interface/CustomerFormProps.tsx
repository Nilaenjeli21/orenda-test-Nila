import CustomersProps from "./CustomersProps"; // Sesuaikan dengan struktur proyek Anda

export default interface CustomerFormProps {
    customers: CustomersProps,
    error: CustomersProps,
    setCustomers: React.Dispatch<React.SetStateAction<CustomersProps>>
}
