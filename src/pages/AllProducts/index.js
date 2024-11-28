import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Checkbox,
  Button,
  Select,
  Flex,
  Pagination,
  Collapse,
} from "antd";
import { Link } from "react-router-dom";
import "./AllProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { addFilter, deleteFilter } from "../../actions/filter";
const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>,
  },
  {
    title: "All Products",
  },
];
export default function AllProducts() {
  const [pages, setPages] = useState(1);
  const filter = useSelector((state) => state.filterReducer);
  const [checkFilter, setCheckFilter] = useState(true);
  const dispatch = useDispatch();
  const [total] = useFetch({ ...filter, checkFilter });
  const [data] = useFetch({ ...filter, pages, limit: 10, checkFilter });
  const handleFilter = (e) => {
    const keys = e.target.name.split(",");
    const value = e.target.value;
    const obj = {};
    keys.forEach((key, index) => {
      obj[key] = [value[index]];
    });
    if (e.target.checked) {
      dispatch(addFilter(obj));
      setCheckFilter(!checkFilter);
    } else {
      console.log("test");
      dispatch(deleteFilter(obj));
      setCheckFilter(!checkFilter);
    }
  };
  const handleSelect = (e) => {
    let key = "sort";
    if (typeof e === "boolean") {
      key = "newArrival";
    }
    const value = e;
    const obj = {};
    obj[key] = value;
    dispatch(addFilter(obj));
    setCheckFilter(!checkFilter);
  };
  const filterItems = [
    {
      key: "1",
      label: "Loại sản phẩm",
      children: (
        <Flex gap={10} vertical>
          <Checkbox
            name={"tags,category"}
            value={[["JACKETS"].join(","), "shirt"]}
            onChange={handleFilter}
          >
            Áo gió
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["HOODIE"].join(","), "shirt"]}
            onChange={handleFilter}
          >
            Áo hoodie
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["T-SHIRT"].join(","), "shirt"]}
            onChange={handleFilter}
          >
            Áo T-shirt
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["POLO"].join(","), "shirt"]}
            onChange={handleFilter}
          >
            Áo Polo
          </Checkbox>

          <Checkbox
            name={"tags,category"}
            value={[["SHORT"].join(","), "trousers"]}
            onChange={handleFilter}
          >
            Quần short
          </Checkbox>
          <Checkbox
            name={"tags,category"}
            value={[["LONG-PANTS"].join(","), "trousers"]}
            onChange={handleFilter}
          >
            Quần dài
          </Checkbox>

          <Checkbox name={"category"} value={["shoes"]} onChange={handleFilter}>
            Giày
          </Checkbox>
          <Checkbox
            name={"category"}
            value={["accessory"]}
            onChange={handleFilter}
          >
            Phụ kiện
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "2",
      label: "Thương hiệu",
      children: (
        <Flex gap={10} vertical>
          <Checkbox name="brand" value={["NIKE"]} onChange={handleFilter}>
            Nike
          </Checkbox>
          <Checkbox name="brand" value={["ADIDAS"]} onChange={handleFilter}>
            Adidas
          </Checkbox>
          <Checkbox name="brand" value={["ASICS"]} onChange={handleFilter}>
            Asics
          </Checkbox>
          <Checkbox
            name="brand"
            value={["LE COQ SPORTIF"]}
            onChange={handleFilter}
          >
            LE COQ SPORTIF
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "6",
      label: "Dòng sản phẩm",
      children: (
        <Flex gap={10} vertical>
          <Checkbox name={"tags"} value={["SPORT"]} onChange={handleFilter}>
            Thể thao
          </Checkbox>
          <Checkbox name={"tags"} value={["FOOTBALL"]} onChange={handleFilter}>
            Bóng đá
          </Checkbox>
          <Checkbox
            name={"tags"}
            value={["BASKETBALL"]}
            onChange={handleFilter}
          >
            Bóng rổ
          </Checkbox>
          <Checkbox name={"tags"} value={["TENNIS"]} onChange={handleFilter}>
            Tennis
          </Checkbox>
          <Checkbox name={"tags"} value={["GOLF"]} onChange={handleFilter}>
            GOLF
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "3",
      label: "Kích thước",
      children: (
        <Flex gap={10} vertical>
          <Checkbox name="sizes" value={["XS"]} onChange={handleFilter}>
            XS
          </Checkbox>
          <Checkbox name="sizes" value={["S"]} onChange={handleFilter}>
            S
          </Checkbox>
          <Checkbox name="sizes" value={["L"]} onChange={handleFilter}>
            L
          </Checkbox>
          <Checkbox name="sizes" value={["M"]} onChange={handleFilter}>
            M
          </Checkbox>
          <Checkbox name="sizes" value={["XL"]} onChange={handleFilter}>
            XL
          </Checkbox>
          <Checkbox name="sizes" value={["6"]} onChange={handleFilter}>
            6
          </Checkbox>
          <Checkbox name="sizes" value={["6.5"]} onChange={handleFilter}>
            6.5
          </Checkbox>
          <Checkbox name="sizes" value={["7"]} onChange={handleFilter}>
            {" "}
            7
          </Checkbox>
          <Checkbox name="sizes" value={["8"]} onChange={handleFilter}>
            8
          </Checkbox>
          <Checkbox name="sizes" value={["8.5"]} onChange={handleFilter}>
            8.5
          </Checkbox>
          <Checkbox name="sizes" value={["9"]} onChange={handleFilter}>
            9
          </Checkbox>
          <Checkbox name="sizes" value={["9.5"]} onChange={handleFilter}>
            9.5
          </Checkbox>
          <Checkbox name="sizes" value={["10"]} onChange={handleFilter}>
            10
          </Checkbox>
          <Checkbox name="sizes" value={["11"]} onChange={handleFilter}>
            11
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "4",
      label: "Mức Giá",
      children: (
        <Flex gap={10} vertical>
          <Checkbox
            name={"price"}
            value={[[0, 500000]]}
            onChange={handleFilter}
          >
            Giá dưới 500.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[500000, 1000000]]}
            onChange={handleFilter}
          >
            500.000₫ - 1.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[1000000, 2000000]]}
            onChange={handleFilter}
          >
            1.000.000₫ - 2.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[2000000, 3000000]]}
            onChange={handleFilter}
          >
            2.000.000₫ - 3.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[3000000, 5000000]]}
            onChange={handleFilter}
          >
            3.000.000₫ - 5.000.000₫
          </Checkbox>
          <Checkbox
            name={"price"}
            value={[[5000000, 99999999999]]}
            onChange={handleFilter}
          >
            Giá trên 5.000.000₫
          </Checkbox>
        </Flex>
      ),
    },
    {
      key: "5",
      label: "Giới tính",
      children: (
        <Flex gap={10} vertical>
          <Checkbox name="genders" value={["MEN"]} onChange={handleFilter}>
            Nam
          </Checkbox>{" "}
          <Checkbox name="genders" value={["WOMEN"]} onChange={handleFilter}>
            Nữ
          </Checkbox>
          <Checkbox name="genders" value={["KIDS"]} onChange={handleFilter}>
            Trẻ em
          </Checkbox>{" "}
          <Checkbox name="genders" value={["GIRLS"]} onChange={handleFilter}>
            Bé nam
          </Checkbox>
          <Checkbox name="genders" value={["BOYS"]} onChange={handleFilter}>
            Bé gái
          </Checkbox>
        </Flex>
      ),
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="allProducts">
      <div className="allProducts__breadcrumb">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <Layout className="allProducts__main">
        <Layout.Sider width={300} theme="light">
          <Collapse items={filterItems} ghost />
        </Layout.Sider>
        <Layout.Content className="allProducts__content">
          <Flex justify="flex-end">
            <Select
              defaultValue={"default"}
              size="large"
              style={{ width: 180 }}
              onChange={handleSelect}
            >
              <Select.Option value="default">Mặc định</Select.Option>
              <Select.Option name="sort" value="-discountPrice">
                Giá giảm dần
              </Select.Option>
              <Select.Option name="sort" value="discountPrice">
                Giá từ tăng dần
              </Select.Option>
              <Select.Option name="sort" value="-title">
                Tên A -{">"} Z
              </Select.Option>
              <Select.Option name="sort" value="title">
                Tên Z -{">"} A
              </Select.Option>
              <Select.Option name="newArrival" value={true}>
                Hàng mới
              </Select.Option>
            </Select>
          </Flex>
          <Row gutter={[30, 30]} className="allProducts__list">
            {data.isLoading &&
              data.products.map((item, idx) => (
                <Col span={8} key={idx}>
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
        </Layout.Content>
      </Layout>
      <Pagination
        align="end"
        total={total.products ? total.products.length : 1}
        pageSize={10}
        showSizeChanger={false}
        onChange={(pages, _) => {
          setPages(pages);
          window.scrollTo({ top: 150, left: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
