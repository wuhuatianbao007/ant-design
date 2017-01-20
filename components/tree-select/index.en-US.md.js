webpackJsonp([115,210],{

/***/ 1091:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "Tree selection control."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "p",
	      [
	        "code",
	        "TreeSelect"
	      ],
	      " is similar to ",
	      [
	        "code",
	        "Select"
	      ],
	      ", but the values are provided in a tree like structure.\nAny data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on."
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "TreeSelect",
	    "filename": "components/tree-select/index.en-US.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#When-To-Use"
	        },
	        "When To Use"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
	        },
	        "API"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "h3",
	      "Tree props"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "value"
	          ],
	          [
	            "td",
	            "To set the current selected treeNode(s)."
	          ],
	          [
	            "td",
	            [
	              "strong",
	              "Default:"
	            ],
	            " string",
	            "|",
	            "string[]. ",
	            [
	              "strong",
	              "With ",
	              [
	                "code",
	                "labelInValue"
	              ],
	              " set:"
	            ],
	            " { value: string, label: ReactNode }/Array<{ value: string, label: ReactNode }>. ",
	            [
	              "strong",
	              "With ",
	              [
	                "code",
	                "treeCheckStrictly"
	              ],
	              " set(",
	              [
	                "code",
	                "halfChecked"
	              ],
	              " is set to ",
	              [
	                "code",
	                "false"
	              ],
	              "):"
	            ],
	            " { value: string, label: ReactNode, halfChecked: string[] }/Array<{ value: string, label: ReactNode, halfChecked: string[] }>."
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "labelInValue"
	          ],
	          [
	            "td",
	            "Determine whether to put ",
	            [
	              "code",
	              "label"
	            ],
	            " into ",
	            [
	              "code",
	              "value"
	            ],
	            ", the type of ",
	            [
	              "code",
	              "value"
	            ],
	            " as specified in the above"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "defaultValue"
	          ],
	          [
	            "td",
	            "To set the initial selected treeNode(s)."
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "string[]"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "multiple"
	          ],
	          [
	            "td",
	            "Support multiple or not, will be ",
	            [
	              "code",
	              "true"
	            ],
	            " when enable ",
	            [
	              "code",
	              "treeCheckable"
	            ],
	            "."
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onSelect"
	          ],
	          [
	            "td",
	            "A callback function, can be executed when you select a treeNode."
	          ],
	          [
	            "td",
	            "function(value, node, extra)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onChange"
	          ],
	          [
	            "td",
	            "A callback function, can be executed when selected treeNodes or input value change"
	          ],
	          [
	            "td",
	            "function(value, label, extra)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "allowClear"
	          ],
	          [
	            "td",
	            "Whether allow clear"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onSearch"
	          ],
	          [
	            "td",
	            "A callback function, can be executed when the search input changes."
	          ],
	          [
	            "td",
	            "function(value: string)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "placeholder"
	          ],
	          [
	            "td",
	            "Placeholder of the select input"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "searchPlaceholder"
	          ],
	          [
	            "td",
	            "Placeholder of the search input"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "dropdownStyle"
	          ],
	          [
	            "td",
	            "To set the style of the dropdown menu"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "dropdownMatchSelectWidth"
	          ],
	          [
	            "td",
	            "Determine whether the dropdown menu and the select input are the same width"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "size"
	          ],
	          [
	            "td",
	            "To set the size of the select input, options: ",
	            [
	              "code",
	              "large"
	            ],
	            " ",
	            [
	              "code",
	              "small"
	            ]
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "default"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "showSearch"
	          ],
	          [
	            "td",
	            "Whether to display a search input in the dropdown menu(valid only in the single mode)"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "disabled"
	          ],
	          [
	            "td",
	            "Disabled or not"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "showCheckedStrategy"
	          ],
	          [
	            "td",
	            [
	              "strong",
	              "Default:"
	            ],
	            " just show child nodes. ",
	            [
	              "strong",
	              [
	                "code",
	                "TreeSelect.SHOW_ALL"
	              ],
	              ":"
	            ],
	            " show all checked treeNodes (include parent treeNode). ",
	            [
	              "strong",
	              [
	                "code",
	                "TreeSelect.SHOW_PARENT"
	              ],
	              ":"
	            ],
	            " show checked treeNodes (just show parent treeNode)."
	          ],
	          [
	            "td",
	            "enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }"
	          ],
	          [
	            "td",
	            "TreeSelect.SHOW_CHILD"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeDefaultExpandAll"
	          ],
	          [
	            "td",
	            "Whether to expand all treeNodes by default"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeCheckable"
	          ],
	          [
	            "td",
	            "Whether to show checkbox on the treeNodes"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeCheckStrictly"
	          ],
	          [
	            "td",
	            "Whether to check nodes precisely(in the ",
	            [
	              "code",
	              "checkable"
	            ],
	            " mode), means parent and child nodes are not associated"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "filterTreeNode"
	          ],
	          [
	            "td",
	            "Whether to filter treeNodes by input value. The value of ",
	            [
	              "code",
	              "treeNodeFilterProp"
	            ],
	            " is used for filtering by default."
	          ],
	          [
	            "td",
	            "boolean",
	            "|",
	            "Function(inputValue: string, treeNode: TreeNode) (should return boolean)"
	          ],
	          [
	            "td",
	            "Function"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeNodeFilterProp"
	          ],
	          [
	            "td",
	            "Will be used for filtering if ",
	            [
	              "code",
	              "filterTreeNode"
	            ],
	            " returns true"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "'value'"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeNodeLabelProp"
	          ],
	          [
	            "td",
	            "Will render as content of select"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "'title'"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeData"
	          ],
	          [
	            "td",
	            "Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)"
	          ],
	          [
	            "td",
	            "array<{ value, label, children, ",
	            "[disabled, selectable]",
	            " }>"
	          ],
	          [
	            "td",
	            "[]"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "treeDataSimpleMode"
	          ],
	          [
	            "td",
	            "Enable simple mode of treeData.(treeData should like this: ",
	            "[{id:1, pid:0, value:'1', label:\"test1\",...},...]",
	            ", pId is parent node's id)"
	          ],
	          [
	            "td",
	            "false",
	            "|",
	            "Array<{ id: string, pId: string, rootPId: null }>"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "loadData"
	          ],
	          [
	            "td",
	            "Load data asynchronously."
	          ],
	          [
	            "td",
	            "function(node)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "getPopupContainer"
	          ],
	          [
	            "td",
	            "To set the container of the dropdown menu. The default is to create a ",
	            [
	              "code",
	              "div"
	            ],
	            " element in ",
	            [
	              "code",
	              "body"
	            ],
	            ", you can reset it to the scrolling area and make a relative reposition. ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	              },
	              "example"
	            ]
	          ],
	          [
	            "td",
	            "Function(triggerNode)"
	          ],
	          [
	            "td",
	            "() => document.body"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "TreeNode props"
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "We recommend you to use ",
	        [
	          "code",
	          "treeData"
	        ],
	        " rather than ",
	        [
	          "code",
	          "TreeNode"
	        ],
	        ", to avoid the trouble of manual construction."
	      ]
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "disabled"
	          ],
	          [
	            "td",
	            "Disabled or not"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "key"
	          ],
	          [
	            "td",
	            "Required property, should be unique in the tree"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "value"
	          ],
	          [
	            "td",
	            "Will be treated as ",
	            [
	              "code",
	              "treeNodeFilterProp"
	            ],
	            " by default, should be unique in the tree"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "title"
	          ],
	          [
	            "td",
	            "Content showed on the treeNodes"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "'---'"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "isLeaf"
	          ],
	          [
	            "td",
	            "Leaf node or not"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});