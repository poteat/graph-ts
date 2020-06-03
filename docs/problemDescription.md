# Single-Server Total Tardiness Scheduling Problem

The SSTT scheduling problem may be viewed as a special case of ATSP (assymetric traveling salesman problem) where the triangle equality does not hold. In general, for N total cases to schedule (alternatively, N nodes in the ATSP), the problem can be viewed as a decision problem where there are N - 1 decisions to make.

The first decision to make is the first job to process (or the node to start out at), and the subsequent N - 2 decisions are to choose subsequent jobs (or nodes to travel to).

The utility function of the SSTT is the total cost of all jobs, where each job's utility cost is dependent to its predecessor job.  Of course, the ATSP's utility function is the sum of all travel costs, modeled as edges of the graph.

The exact naive method of finding the vector of decisions that minimize the utility function is to calculate the cost of each permutation of decisions. The number of decision permutations is N!, so the naive method has complexity N!.