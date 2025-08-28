# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
def _find_ancestors(node, left, right, target):
    if node == target:
        return {node}
    if node == None or (left == None and right == None):
        return None
    if left != None:
        left = _find_ancestors(left, left.left, left.right, target)
    if right != None:
        right = _find_ancestors(right, right.left, right.right, target)
    print(left, right)
    if left != None:
       # left.add(node)
        return {node}.union(left)
    elif right != None:
       # right.add(right)
        return {node}.union(right)
    else:
        return None

def find_ancestors(root, target):
    if root == target:
        final = set()
        final.add(target)
        return final
    return _find_ancestors(root, root.left, root.right, target)
           

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        print(find_ancestors(root,p))
        return root
    
        
