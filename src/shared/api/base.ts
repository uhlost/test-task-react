const API_URL = import.meta.env.VITE_API_URL

export function useCRUD<TData, TOne, TCreate = undefined, TUpdate = undefined>(
  url: string,
  queryKey: string[]
) {
  const queryClient = useQueryClient()

  async function getAll(): Promise<TData> {
    const res = await fetch(`${API_URL}${url}`)
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  }

  async function getOne(id: number): Promise<TOne> {
    const res = await fetch(`${API_URL}${url}/${id}`)
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  }

  async function create(data: TCreate) {
    const res = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  }

  async function update(id: number, data: Partial<TUpdate>) {
    const res = await fetch(`${API_URL}${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  }

  async function remove(id: number) {
    const res = await fetch(`${API_URL}${url}/${id}`, {
      method: "DELETE",
    })
    if (!res.ok) throw new Error("Failed to fetch")

    if (res.status === 204) return null

    return res.json()
  }

  // Хуки
  const useAll = () => {
    return useQuery({
      queryKey: queryKey,
      queryFn: getAll,
      retry: 1,
    })
  }

  const useOne = (id: number) => {
    return useQuery({
      queryKey: [...queryKey, id],
      queryFn: () => getOne(id),
      enabled: !!id,
    })
  }

  const useCreate = () => {
    return useMutation({
      mutationFn: create,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKey })
      },
    })
  }

  const useUpdate = () => {
    return useMutation({
      mutationFn: ({ id, data }: { id: number; data: Partial<TUpdate> }) =>
        update(id, data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKey })
      },
    })
  }

  const useDelete = () => {
    return useMutation({
      mutationFn: remove,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKey })
      },
    })
  }

  return {
    useAll,
    useOne,
    useCreate,
    useUpdate,
    useDelete,
  }
}
