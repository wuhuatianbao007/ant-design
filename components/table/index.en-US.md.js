webpackJsonp([129,210],{

/***/ 1039:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "A table displays rows data."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "To display a collection of structured data."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "To sort, search, paginate, filter data."
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "How To Use"
	    ],
	    [
	      "p",
	      "Specify ",
	      [
	        "code",
	        "dataSource"
	      ],
	      " of Table whose value is an array of data."
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Mike'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'10 Downing Street'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'10 Downing Street'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
	      },
	      [
	        "code",
	        "const dataSource = [{\n  key: '1',\n  name: 'Mike',\n  age: 32,\n  address: '10 Downing Street'\n}, {\n  key: '2',\n  name: 'John',\n  age: 42,\n  address: '10 Downing Street'\n}];\n\nconst columns = [{\n  title: 'Name',\n  dataIndex: 'name',\n  key: 'name',\n}, {\n  title: 'Age',\n  dataIndex: 'age',\n  key: 'age',\n}, {\n  title: 'Address',\n  dataIndex: 'address',\n  key: 'address',\n}];\n\n<Table dataSource={dataSource} columns={columns} />"
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "cols": 1,
	    "type": "Data Display",
	    "title": "Table",
	    "filename": "components/table/index.en-US.md"
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
	          "href": "#How-To-Use"
	        },
	        "How To Use"
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
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Using-in-TypeScript"
	        },
	        "Using in TypeScript"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Note"
	        },
	        "Note"
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
	      "Table"
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
	            "rowSelection"
	          ],
	          [
	            "td",
	            "row selection ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "#rowSelection"
	              },
	              "config"
	            ]
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "null"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "pagination"
	          ],
	          [
	            "td",
	            "pagination ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/pagination/"
	              },
	              "config"
	            ],
	            ", hide it via setting to ",
	            [
	              "code",
	              "false"
	            ]
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td"
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
	            "size of table: ",
	            [
	              "code",
	              "default"
	            ],
	            " or ",
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
	            [
	              "code",
	              "default"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "dataSource"
	          ],
	          [
	            "td",
	            "data record array to be rendered"
	          ],
	          [
	            "td",
	            "any[]"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "columns"
	          ],
	          [
	            "td",
	            "columns of table"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "https://git.io/vMMXC"
	              },
	              "ColumnProps"
	            ],
	            "[]"
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
	            "rowKey"
	          ],
	          [
	            "td",
	            "get row's key, could be a string or function"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "Function(record):string"
	          ],
	          [
	            "td",
	            "'key'"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "rowClassName"
	          ],
	          [
	            "td",
	            "get row's className"
	          ],
	          [
	            "td",
	            "Function(record, index):string"
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
	            "expandedRowRender"
	          ],
	          [
	            "td",
	            "expanded container render for each row"
	          ],
	          [
	            "td",
	            "Function"
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
	            "defaultExpandedRowKeys"
	          ],
	          [
	            "td",
	            "initial expanded row keys"
	          ],
	          [
	            "td",
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
	            "expandedRowKeys"
	          ],
	          [
	            "td",
	            "current expanded rows keys"
	          ],
	          [
	            "td",
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
	            "defaultExpandAllRows"
	          ],
	          [
	            "td",
	            "expand all rows initially"
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
	            "onExpandedRowsChange"
	          ],
	          [
	            "td",
	            "function to call when the expanded rows change"
	          ],
	          [
	            "td",
	            "Function(expandedRows)"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onExpand"
	          ],
	          [
	            "td",
	            "function to call when click expand icon"
	          ],
	          [
	            "td",
	            "Function(expanded, record)"
	          ],
	          [
	            "td"
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
	            "callback that is called when pagination, filters, sorter is changed"
	          ],
	          [
	            "td",
	            "Function(pagination, filters, sorter)"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "loading"
	          ],
	          [
	            "td",
	            "loading status of table"
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
	            "locale"
	          ],
	          [
	            "td",
	            "i18n text include filter, sort, empty text...etc"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "filterConfirm: 'Ok' ",
	            [
	              "br"
	            ],
	            " filterReset: 'Reset' ",
	            [
	              "br"
	            ],
	            " emptyText: 'No Data' ",
	            [
	              "br"
	            ],
	            " ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511"
	              },
	              "Default"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "indentSize"
	          ],
	          [
	            "td",
	            "index pixel size of tree data"
	          ],
	          [
	            "td",
	            "number"
	          ],
	          [
	            "td",
	            "15"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onRowClick"
	          ],
	          [
	            "td",
	            "callback that is called when click a row"
	          ],
	          [
	            "td",
	            "Function(record, index)"
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
	            "bordered"
	          ],
	          [
	            "td",
	            "whether to show table border completely"
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
	            "showHeader"
	          ],
	          [
	            "td",
	            "whether to show table header"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "footer"
	          ],
	          [
	            "td",
	            "table footer renderer"
	          ],
	          [
	            "td",
	            "Function(currentPageData)"
	          ],
	          [
	            "td"
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
	            "table title renderer"
	          ],
	          [
	            "td",
	            "Function(currentPageData)"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "scroll"
	          ],
	          [
	            "td",
	            "whether table can be scroll in x/y direction, ",
	            [
	              "code",
	              "x"
	            ],
	            " or ",
	            [
	              "code",
	              "y"
	            ],
	            " can be a number that indicated the width and height of table body"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Column"
	    ],
	    [
	      "p",
	      "One of Property ",
	      [
	        "code",
	        "columns"
	      ],
	      " for descriping column, Column has the same API."
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
	            "title"
	          ],
	          [
	            "td",
	            "title of this column"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
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
	            "key"
	          ],
	          [
	            "td",
	            "key of this column"
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
	            "dataIndex"
	          ],
	          [
	            "td",
	            "display field of the data record, could be set like ",
	            [
	              "code",
	              "a.b.c"
	            ]
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
	            "render"
	          ],
	          [
	            "td",
	            "renderer of table cell, has three params: text, record and index of this row. The render value should be a ReactNode, or a object for ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "#demo-colspan-rowspan"
	              },
	              "colSpan/rowSpan config"
	            ]
	          ],
	          [
	            "td",
	            "Function(text, record, index) {}"
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
	            "filters"
	          ],
	          [
	            "td",
	            "filter menu config"
	          ],
	          [
	            "td",
	            "object[]"
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
	            "onFilter"
	          ],
	          [
	            "td",
	            "callback that is called when when click confirm filter button"
	          ],
	          [
	            "td",
	            "Function"
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
	            "filterMultiple"
	          ],
	          [
	            "td",
	            "whether to select multiple filtered item"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "filterDropdown"
	          ],
	          [
	            "td",
	            "customized filter overlay"
	          ],
	          [
	            "td",
	            "ReactNode"
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
	            "filterDropdownVisible"
	          ],
	          [
	            "td",
	            "whether filterDropdown is visible"
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
	            "onFilterDropdownVisibleChange"
	          ],
	          [
	            "td",
	            "called when filterDropdownVisible is changed"
	          ],
	          [
	            "td",
	            "function(visible) {}"
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
	            "filteredValue"
	          ],
	          [
	            "td",
	            "controlled filtered value"
	          ],
	          [
	            "td",
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
	            "sorter"
	          ],
	          [
	            "td",
	            "sort function for local sort. If you need sort buttons only, set it ",
	            [
	              "code",
	              "true"
	            ]
	          ],
	          [
	            "td",
	            "Function",
	            "|",
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
	            "colSpan"
	          ],
	          [
	            "td",
	            "span of this column's title"
	          ],
	          [
	            "td",
	            "number"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "width"
	          ],
	          [
	            "td",
	            "width of this column"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "number"
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
	            "className"
	          ],
	          [
	            "td",
	            "className of this column"
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
	            "fixed"
	          ],
	          [
	            "td",
	            "set column to be fixed: ",
	            [
	              "code",
	              "true"
	            ],
	            "(same as left) ",
	            [
	              "code",
	              "'left'"
	            ],
	            " ",
	            [
	              "code",
	              "'right'"
	            ]
	          ],
	          [
	            "td",
	            "boolean",
	            "|",
	            "string"
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
	            "sortOrder"
	          ],
	          [
	            "td",
	            "controlled sorted value: ",
	            [
	              "code",
	              "'ascend'"
	            ],
	            " ",
	            [
	              "code",
	              "'descend'"
	            ],
	            " ",
	            [
	              "code",
	              "false"
	            ]
	          ],
	          [
	            "td",
	            "boolean",
	            "|",
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
	            "onCellClick"
	          ],
	          [
	            "td",
	            "callback when click cell"
	          ],
	          [
	            "td",
	            "Function(record, event)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "ColumnGroup"
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
	            "title"
	          ],
	          [
	            "td",
	            "title of the column group"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "rowSelection"
	    ],
	    [
	      "p",
	      "Properties for selection."
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
	            "type"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "checkbox"
	            ],
	            " or ",
	            [
	              "code",
	              "radio"
	            ]
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "checkbox"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "selectedRowKeys"
	          ],
	          [
	            "td",
	            "controlled selected row keys"
	          ],
	          [
	            "td",
	            "string[]"
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
	            "onChange"
	          ],
	          [
	            "td",
	            "callback that is called when selected rows change"
	          ],
	          [
	            "td",
	            "Function(selectedRowKeys, selectedRows)"
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
	            "getCheckboxProps"
	          ],
	          [
	            "td",
	            "get Checkbox or Radio props"
	          ],
	          [
	            "td",
	            "Function(record)"
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
	            "onSelect"
	          ],
	          [
	            "td",
	            "callback that is called when select/deselect one row"
	          ],
	          [
	            "td",
	            "Function(record, selected, selectedRows)"
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
	            "onSelectAll"
	          ],
	          [
	            "td",
	            "callback that is called when select/deselect all"
	          ],
	          [
	            "td",
	            "Function(selected, selectedRows, changeRows)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "Using in TypeScript"
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TableColumnConfig <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/table/Table'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">interface</span> <span class=\"token class-name\">IUser</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> number<span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> string<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> columns<span class=\"token punctuation\">:</span> TableColumnConfig<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IUser</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data<span class=\"token punctuation\">:</span> IUser<span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jack'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">UserTable</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Table</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IUser</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>UserTable</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Use JSX style API</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NameColumn</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Table<span class=\"token punctuation\">.</span>Column</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IUser</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>UserTable</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NameColumn</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>name<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Name<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>name<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>UserTable</span><span class=\"token punctuation\">></span></span>"
	      },
	      [
	        "code",
	        "import { Table } from 'antd';\nimport { TableColumnConfig } from 'antd/lib/table/Table';\n\ninterface IUser {\n  key: number,\n  name: string;\n}\n\nconst columns: TableColumnConfig<IUser>[] = [{\n  key: 'name',\n  title: 'Name',\n  dataIndex: 'name',\n}];\n\nconst data: IUser[] = [{\n  key: 0,\n  name: 'Jack',\n}];\n\nclass UserTable extends Table<IUser> {}\n\n<UserTable columns={columns} dataSource={data} />\n\n// Use JSX style API\nclass NameColumn extends Table.Column<IUser> {}\n\n<UserTable dataSource={data}>\n  <NameColumn key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</UserTable>"
	      ]
	    ],
	    [
	      "h2",
	      "Note"
	    ],
	    [
	      "p",
	      "According to ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "http://facebook.github.io/react/docs/multiple-components.html#dynamic-children"
	        },
	        "React documentation"
	      ],
	      ", every child in array should be assigned a unique key. The value inside ",
	      [
	        "code",
	        "dataSource"
	      ],
	      " and ",
	      [
	        "code",
	        "columns"
	      ],
	      " should follow this in Table, and ",
	      [
	        "code",
	        "dataSource[i].key"
	      ],
	      " would be treated as key value defaultly for ",
	      [
	        "code",
	        "dataSource"
	      ],
	      "."
	    ],
	    [
	      "p",
	      "If ",
	      [
	        "code",
	        "dataSource[i].key"
	      ],
	      " is not existed, then you should specify the primary key of dataSource value via ",
	      [
	        "code",
	        "rowKey"
	      ],
	      ". If not, warnings like above will show in browser console."
	    ],
	    [
	      "p",
	      [
	        "img",
	        {
	          "title": null,
	          "src": "https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",
	          "alt": null
	        }
	      ]
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// primary key is uid</span>\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>uid<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// or</span>\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>uid<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
	      },
	      [
	        "code",
	        "// primary key is uid\nreturn <Table rowKey=\"uid\" />;\n// or\nreturn <Table rowKey={record => record.uid} />;"
	      ]
	    ]
	  ]
	};

/***/ }

});