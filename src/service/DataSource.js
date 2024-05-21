import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

/**
 * 封装自定义 hook: useDataSource
 * 增（add）、删（remove）、改（update）、查（serch）、复制（copy）、排序（sort）
 * */

// static option
const staticQueryOptions = {
  refetchInterval: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  retry: false,
  enabled: true,
}

// hook
export function useDataSource(adapter, params, refetch) {
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery(
    [...adapter.queryKeys(), params],
    () => adapter.search(params),
    {
      ...staticQueryOptions,
      enabled: true,
      refetchInterval: refetch,
    },
  )

  const onSuccess = () => {
    queryClient.invalidateQueries(adapter.queryKeys())
  }

  // 可操作
  const add = useMutation(adapter.add, { onSuccess })
  const copy = adapter.copy && useMutation(adapter.copy, { onSuccess })
  const sort = adapter.sort && useMutation(adapter.sort, { onSuccess })
  const update = adapter.update && useMutation(adapter.update, { onSuccess })
  const remove = adapter.remove && useMutation(adapter.remove, { onSuccess })

  return {
    data,
    isLoading,
    error,
    add: add && add.mutate,
    copy: copy && copy.mutate,
    sort: sort && sort.mutate,
    update: update && update.mutate,
    remove: remove && remove.mutate,
  }
}
