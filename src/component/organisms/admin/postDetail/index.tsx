import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text
} from '@chakra-ui/react';
import HeadingChakra from '@src/component/atoms/admin/Heading';
import ImageBorderZoom from '@src/component/atoms/admin/Image/ImageBorderZoom';
import { ReactQuill, formats, modules } from '@src/config/reactQuill';
import 'react-quill/dist/quill.snow.css';
import { useFormPost } from '@src/hook/useFormPost';
import ButtonOutline from '@src/component/atoms/admin/Button/ButtonOutline';
import ButtonSolid from '@src/component/atoms/admin/Button/ButtonSolid';
import {
  ICategory,
  IPost
} from '@src/component/organisms/admin/createPostForm';
import { ImUpload2 } from 'react-icons/im';
import { FaTimesCircle } from 'react-icons/fa';
// @ts-ignore
import ImageUploader from 'react-image-upload';
import InputText from '@src/component/atoms/admin/Input/inputText';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CategoryTag from '@src/component/atoms/admin/CategoryTag';
import TextareaChakra from '@src/component/atoms/admin/TextareaChakra';
import { useTranslation } from 'react-i18next';

interface IPostDetail {
  post: {
    title: string;
    slug: string;
    description: string;
    content: string;
    thumbnail: string;
    updatedAt?: string;
    categoryId: string;
    categoryName: string;
  };
  isEdit: boolean;
  onClickExit: () => void;
  onSubmit: (formValue: IPost) => void;
  categories: ICategory[];
}
const PostDetail: React.FC<IPostDetail> = ({
  post,
  onSubmit,
  isEdit,
  onClickExit,
  categories
}) => {
  const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { t } = useTranslation('postsLocale');
  const { formValue, setFormValue, errors, setErrors, validation } =
    useFormPost({
      title: '',
      thumbnail: '',
      slug: '',
      description: '',
      content: '',
      categoryId: ''
    });

  useEffect(() => {
    setFormValue({
      title: post.title,
      thumbnail: imageURL + post.thumbnail,
      slug: post.slug,
      description: post.description,
      content: post.content,
      categoryId: post.categoryId
    });
  }, [post]);

  const handleChangeTitle = (value: string) => {
    setFormValue({
      ...formValue,
      title: value
    });
    setErrors(undefined);
  };

  const handleChangeCategory = (value: string) => {
    setFormValue({
      ...formValue,
      categoryId: value
    });
  };

  const handleChangeDescription = (value: string) => {
    setFormValue({
      ...formValue,
      description: value
    });
    setErrors(undefined);
  };

  const handleChangeContent = (e: string) => {
    setFormValue({
      ...formValue,
      content: e
    });
    setErrors(undefined);
  };

  const getImageFileObject = (imageFile: ImageUploader) => {
    setFormValue({
      ...formValue,
      thumbnail: imageFile?.file
    });
  };

  const handleUpdate = () => {
    if (validation()) {
      onSubmit(formValue);
    }
  };

  return !isEdit ? (
    <Box>
      <Box mb={'30px'}>
        <HeadingChakra text={t('title')} fontSize={'xl'} />
        <Text fontSize={'lg'} ml={'20px'} color={'textColor'}>
          {post?.title}
        </Text>
      </Box>

      <Box mb={'30px'}>
        <HeadingChakra text={t('slug')} fontSize={'xl'} />
        <Text fontSize={'lg'} ml={'20px'} color={'textColor'}>
          {post?.slug}
        </Text>
      </Box>
      <Box mb={'30px'}>
        <CategoryTag text={post?.categoryName} />
      </Box>
      <Box mb={'30px'}>
        <HeadingChakra text={t('description')} fontSize={'xl'} />
        <Text
          textAlign={'justify'}
          fontSize={'lg'}
          ml={'20px'}
          color={'textColor'}
        >
          {post?.description}
        </Text>
      </Box>

      <Box mb={'30px'}>
        <HeadingChakra text={t('thumbnailImage')} fontSize={'xl'} />
        <Box boxSize="sm" w={{ md: '30%', base: '86%' }} h={'100%'} ml={'20px'}>
          <ImageBorderZoom
            src={
              post.thumbnail ? imageURL + post.thumbnail : '/images/noImage.jpg'
            }
          />
        </Box>
      </Box>

      <Box mb={'30px'}>
        <HeadingChakra text={t('content')} fontSize={'xl'} />
        <Box
          dangerouslySetInnerHTML={{ __html: post?.content }}
          textAlign={'justify'}
        />
      </Box>
    </Box>
  ) : (
    <Box>
      <Box mb={'30px'}>
        <InputText
          text={t('title')}
          value={formValue?.title}
          placeholder={t('title') + '...'}
          onChange={(e) => handleChangeTitle(e.currentTarget.value)}
          error={errors?.title?.message || ' '}
        />
      </Box>

      <Box mb={'30px'}>
        <HeadingChakra text={t('slug')} fontSize={'xl'} />
        <Text fontSize={'lg'} ml={'20px'} color={'textColor'}>
          {formValue?.slug}
        </Text>
      </Box>

      <Box mb={'30px'}>
        <Menu>
          <MenuButton
            bgColor={'#E2E8F0'}
            color={'textColor'}
            size={'md'}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            _hover={{ bgColor: 'hoverColor', color: 'white' }}
            _active={{ bgColor: 'hoverColor', color: 'white' }}
          >
            {t('selectCategory')}
          </MenuButton>

          <MenuList
            overflow={'auto'}
            maxHeight={'300px'}
            sx={{
              '&::-webkit-scrollbar': {
                width: '4px'
              },
              '&::-webkit-scrollbar-track': {
                width: '6px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'hoverColor',
                borderRadius: '24px'
              }
            }}
          >
            <MenuOptionGroup
              defaultValue={post?.categoryId}
              type="radio"
              onChange={(value) => handleChangeCategory(String(value))}
            >
              {categories?.map((category) => (
                <MenuItemOption key={category._id} value={category._id}>
                  {category.name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>

      <Box mb={'30px'}>
        <TextareaChakra
          text={t('description')}
          value={formValue?.description}
          onChange={(e) => handleChangeDescription(e.currentTarget.value)}
          placeholder={t('description') + '...'}
          error={errors?.description?.message || ''}
        />
      </Box>

      <Box>
        <HeadingChakra text={'Ảnh thumbnail'} fontSize={'xl'} />
        <Flex justifyContent={'center'} w={'100%'} h={'auto'}>
          <ImageUploader
            style={{
              width: '50vw',
              height: '200px',
              fontSize: '24px',
              color: '#DD6B20',
              margin: '0 auto',
              background: '#E2E8F0',
              border: '2px dotted #DD6B20',
              borderRadius: '20px'
            }}
            onFileAdded={(img: ImageUploader) => getImageFileObject(img)}
            // onFileRemoved={(img) => runAfterImageDelete(img)}
            uploadIcon={
              <Flex
                w={'50vw'}
                h={'200px'}
                justifyContent={'center'}
                alignItems={'center'}
                // bgColor={'red'}
              >
                <ImUpload2 fontSize={'48px'} />
              </Flex>
            }
            deleteIcon={<FaTimesCircle />}
          />
        </Flex>
      </Box>

      <Box mb={'30px'}>
        <HeadingChakra text={t('content')} fontSize={'xl'} />
        <Flex flexDirection={'column'} gap={4} w={'100%'} mt={'20px'}>
          <ReactQuill
            formats={formats}
            modules={modules}
            theme="snow"
            value={formValue?.content}
            onChange={(e) => handleChangeContent(e)}
          />
        </Flex>
      </Box>
      {isEdit && (
        <Flex
          gap={4}
          justifyContent={'flex-end'}
          flexDirection={{ md: 'row', base: 'column-reverse' }}
          mb={{ md: 'auto', base: '20px' }}
        >
          <ButtonOutline size={'md'} text={t('cancel')} onClick={onClickExit} />
          <ButtonSolid
            size={'md'}
            text={t('update')}
            onClick={() => handleUpdate()}
          />
        </Flex>
      )}
    </Box>
  );
};

export default PostDetail;
