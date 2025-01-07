import { z } from "zod"

const SumberEnum = ["Whatsapp", "Call", "Heru"] as const

export const schemaOrder = z.object({
    sumber: z.enum(SumberEnum, {
      errorMap: () => ({message: 'Harap pilih salah satu'})
    }),
    nama: z.string({ message: "Nama wajib Di isi" }).min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Invalid email"),
    hp: z.string({ message: "Nomor HP wajib Di isi" }).min(9, "Nomor HP minimal 9 angka"),
    jumlah: z.coerce.number({ invalid_type_error: "Pastikan jumlahnya" }).gt(0, "Mohon di isi jumlah nya"),
    keterangan: z.string({ message: "Mohon keterangan di isi" }).optional(),
})

export type OrderSchema = z.infer<typeof schemaOrder>
