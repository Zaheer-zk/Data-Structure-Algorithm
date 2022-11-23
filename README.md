# Data-Structure-Algorithm


## Useful Pattern on DSA for Interview

1. Sliding Window
2. Islands (Matrix Traversal)
3. Two Pointers
4. Fast & Slow Pointers
5. Merge Intervals
6. Cyclic Sort
7. In-place Reversal of a LinkedList
8. Tree Breadth-First Search
9. Tree Depth First Search
10. Two Heaps
11. Subsets
12. Modified Binary Search
13. Bitwise XOR
14. Top ‘K’ Elements
15. K-way Merge
16. Topological Sort
17. 0/1 Knapsack
18. Fibonacci Numbers
19. Palindromic Subsequence
20. Longest Common Substring

## Tips to solve coding quetions

```
If input array is sorted then
- Binary search
- We can you use BinarySearch for finding for certain range and want lesser then that range. [Question - Painting Partition](https://practice.geeksforgeeks.org/problems/the-painters-partition-problem1535/1)
- Two pointers
    
If we want to find next ele, "Next to you (Before/ After)"
- Stack

Input is a Binary Tree
- DFS (Preorder, Inorder, Postorder): O(n)
- BFS (Level Order): O(n)

Input is a Binary Search Tree
- Left < Cur < Right: O(log n)
- Inorder Traversal visits the nodes in ascending (sorted) order: O(n)

Input is a Matrix/Graph
- DFS (Recursion, Stack): O(n)
- BFS (Queue): O(n)

Find the Shortest/Nearest Path/Distance in a Tree/Matrix/Graph
- BFS (non-weighted): O(n)
- Dijkstra (weighted): O(E log V)

String Concatenation
- StringBuilder: O(n) (Java, C#, etc.)
- String.join(): O(n) (Python, JavaScript)

Input is a Linked List
- Dummy Node
- Two Pointers: O(n)
- Fast & Slow Pointers: O(n)

Recomputing the Same Input
- Memoization (DP)

Recursion is Banned
- Stack

Permutations/Combinations/Subsets
- Backtracking

Find the Top/Least Kth element
- QuickSelect: O(n) average, O(n²) worst
- Heap: O(n log k)

Common Strings
- Map
- Trie

Sort
- Quick Sort: O(n log n) average, O(n²) worst
- Merge Sort: O(n log n)
- Built-in sorts: O(n log n)

Find the Smallest/Largest/Median in a Stream
- Two Heaps

Must Solve In-Place
- Swap corresponding values
- Store different values in the same pointer

Maximum/Minimum Subarray/Subset/Options
- Dynamic Programming

Map/Set
- Time: O(1)
- Space: O(n)

Deque
- Replaces Stack, Queue, and LinkedList
 ```   
    For more checkout - (https://github.com/seanprashad/leetcode-patterns)
