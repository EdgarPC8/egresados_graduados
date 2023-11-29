import React, { Component } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import { CloseIcon } from "@chakra-ui/icons";


class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentPage: 1,
      data: props.data || [],
      sortBy: null,
      sortOrder: 'asc',
    };
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleClear = () => {
    this.setState({ searchTerm: '' });
  };

  handlePaginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  reload = () => {
    this.setState({ data: this.props.data || [], searchTerm: '', currentPage: 1 });
  };

  addRowNumber = () => {
    const { data } = this.state;
    const newData = data.map((item, index) => {
      return {
        ...item,
        rowNumber: index + 1,
      };
    });
    this.setState({ data: newData });
  };

  handleColumnSort = (columnKey) => {
    const { data, sortBy, sortOrder } = this.state;

    let newSortOrder = 'asc';
    if (sortBy === columnKey && sortOrder === 'asc') {
      newSortOrder = 'desc';
    }

    const sortedData = data.slice().sort((a, b) => {
      const valueA = a[columnKey];
      const valueB = b[columnKey];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return newSortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return newSortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });

    this.setState({
      data: sortedData,
      sortBy: columnKey,
      sortOrder: newSortOrder,
    });
  };

  render() {
    const { columnHeaders, columnKeys, tableTitle } = this.props;
    const { searchTerm, currentPage, data, sortBy, sortOrder } = this.state;
    const itemsPerPage = 5;

    const filteredData = data.filter((item) =>
      columnKeys.some(
        (key) =>
          String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <Box>
        <Flex mb={4} justify="space-between" align="center">
          <Box fontSize="xl" fontWeight="bold">{tableTitle}</Box>
          <Flex align="center">
            <Input
              placeholder="Buscar..."
              value={searchTerm}
              onChange={this.handleSearch}
              mr={2}
            />
            {searchTerm && (
              <CloseIcon style={{ fontSize: '16px' }} cursor="pointer" onClick={this.handleClear} />
            )}
          </Flex>
        </Flex>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              {columnHeaders.map((header, index) => (
                <Th
                  key={index}
                  onClick={() => this.handleColumnSort(columnKeys[index])}
                  style={{ cursor: 'pointer' }}
                >
                  {header} {sortBy === columnKeys[index] && sortOrder === 'asc' && '↑'}
                  {sortBy === columnKeys[index] && sortOrder === 'desc' && '↓'}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((item, rowIndex) => (
              <Tr key={rowIndex}>
                {columnKeys.map((key, colIndex) => (
                  <Td key={colIndex} fontSize="sm" px={4}>
                    {item[key]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justify="center" mt={4}>
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map(
            (_, index) => (
              <Button key={index} mx={1} onClick={() => this.handlePaginate(index + 1)}>
                {index + 1}
              </Button>
            )
          )}
        </Flex>
      </Box>
    );
  }
}

export default DataTable;
