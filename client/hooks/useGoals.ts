import {
    useQuery,
    useMutation,
    useQueryClient,
    MutationFunction,
  } from '@tanstack/react-query'

  import { getGoals } from '../apis/goals'
  
export function useGoals() {
    const query = useQuery({ queryKey: ['goals'], queryFn: getGoals })
    return {
        ...query,
    }
}

export function useGoalsMutation<TData = unknown, TVariables = unknown>(
    mutationFn: MutationFunction<TData, TVariables>
  ) {
    const queryClient = useQueryClient()
    const mutation = useMutation({
      mutationFn,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['goals'] })
      },
    })
  
    return mutation
  }