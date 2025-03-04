import { useState } from "react"

interface FormProps {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

export const Form = () => {
    const [form, setForm] = useState<FormProps>({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`email: ${form.email}\nfirstname: ${form.firstname}\nlastname: ${form.lastname}\nphone: ${form.phone}`);
    };

    return (
        <form onSubmit={handleSubmit} className="*:lg:flex *:lg:gap-2 *:xl:gap-6 *:items-center *:flex-nowrap">
            <div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={form.lastname}
                        placeholder="Lastname"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={form.firstname}
                        placeholder="Firstname"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={form.email}
                        placeholder="Email"
                        autoComplete="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
