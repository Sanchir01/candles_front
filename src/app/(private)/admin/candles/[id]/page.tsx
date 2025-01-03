import AdminCandleForm from '~/widgets/admin-candle-from'
export default async function Page({
   params
}: {
   params: Promise<{ slug: string }>
}) {
   const id = (await params).slug

   return <AdminCandleForm id={id} />
}
