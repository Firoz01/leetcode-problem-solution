var mergeTwoLists = function (list1, list2) {
  // Create a new List with null node.
  var resNode = new ListNode(0, null);
  var head = resNode;
  // do operation till both the list exist
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      resNode.next = list1;
      list1 = list1.next;
    } else {
      resNode.next = list2;
      list2 = list2.next;
    }
    resNode = resNode.next;
  }
  // add list values at the end so that we dont miss extra elements in any list.
  resNode.next = list1 || list2;
  return head.next;
};
console.log(mergeTwoLists([], [0]));
